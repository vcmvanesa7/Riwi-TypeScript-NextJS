"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    createProperty,
    getProperties,
    updateProperty,
    deleteProperty,
} from "@/services/properties";
import { propertyProps } from "@/dto/properties";
import styles from "@/styles/crud.module.css";

export default function ManageProperties() {
    const router = useRouter();

    // --- Estados ---
    const [name, setName] = useState("");
    const [value, setValue] = useState<number | "">("");
    const [img, setImg] = useState("");
    const [loading, setLoading] = useState(false);
    const [properties, setProperties] = useState<propertyProps[]>([]);
    const [loadingList, setLoadingList] = useState(false);

    // --- Mensajitos (toasts) ---
    const [toast, setToast] = useState<{ text: string; type: "success" | "error" | "info" } | null>(null);

    // --- Modal edición ---
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editForm, setEditForm] = useState<{
        _id?: string;
        name: string;
        value: number | "";
        img?: string;
    }>({ _id: undefined, name: "", value: "", img: "" });

    // Función para mostrar mensajes bonitos
    const showToast = (text: string, type: "success" | "error" | "info" = "info") => {
        setToast({ text, type });
        setTimeout(() => setToast(null), 2500);
    };

    // 🔸 Cargar propiedades
    const loadList = async () => {
        setLoadingList(true);
        try {
            const resp = await getProperties();
            if (resp.ok) {
                setProperties(resp.data);
            } else {
                showToast("No se pudieron cargar las propiedades.", "error");
            }
        } catch (err) {
            console.error("Error cargando propiedades", err);
            showToast("Error conectando con API.", "error");
        } finally {
            setLoadingList(false);
        }
    };

    useEffect(() => {
        loadList();
    }, []);

    // 🔸 Crear
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createProperty({ name, value: Number(value), img });
            showToast(" Propiedad creada exitosamente", "success");
            setName("");
            setValue("");
            setImg("");
            await loadList();
        } catch (error) {
            console.error(error);
            showToast("Error al crear la propiedad", "error");
        } finally {
            setLoading(false);
        }
    };

    // 🔸 Editar
    const openEditModal = (p: propertyProps) => {
        setEditForm({
            _id: p._id,
            name: p.name,
            value: p.value ?? "",
            img: p.img ?? "",
        });
        setIsEditOpen(true);
    };

    const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({
            ...prev,
            [name]: name === "value" ? (value === "" ? "" : Number(value)) : value,
        }));
    };

    const handleEditSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editForm._id) return;
        setLoading(true);

        try {
            const payload: propertyProps = {
                _id: editForm._id,
                name: editForm.name,
                value: Number(editForm.value),
                img: editForm.img ?? "",
            };
            await updateProperty(payload);
            showToast("Propiedad actualizada", "success");
            setIsEditOpen(false);
            await loadList();
        } catch (err) {
            console.error("Error actualizando propiedad", err);
            showToast("Error al actualizar la propiedad", "error");
        } finally {
            setLoading(false);
        }
    };

    // 🔸 Eliminar
    const handleDelete = async (_id?: string) => {
        if (!_id) return;
        // Confirm personalizado (toast)
        const confirmBox = window.confirm("¿Seguro quieres eliminar esta propiedad?");
        if (!confirmBox) return;

        setLoading(true);
        try {
            await deleteProperty(_id);
            setProperties((prev) => prev.filter((p) => p._id !== _id));
            showToast("Propiedad eliminada", "success");
        } catch (err) {
            console.error("Error eliminando propiedad", err);
            showToast("Error al eliminar la propiedad", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.pageContainer}>
            {/*  Crear Propiedad */}
            <h2 className={styles.title}>Crear Propiedad</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Valor:
                    <input
                        type="number"
                        value={value}
                        onChange={(e) =>
                            setValue(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        required
                    />
                </label>
                <label>
                    URL de Imagen:
                    <input
                        type="text"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? "Creando..." : "Crear Propiedad"}
                </button>
            </form>

            <hr className={styles.separator} />

            {/*  Listado */}
            <h3 className={styles.subtitle}>Listado de Propiedades</h3>
            {loadingList ? (
                <p>Cargando propiedades...</p>
            ) : properties.length === 0 ? (
                <p>No hay propiedades aún.</p>
            ) : (
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Valor</th>
                                <th>URL imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {properties.map((p) => (
                                <tr key={p._id}>
                                    <td>{p.name}</td>
                                    <td>${p.value}</td>
                                    <td className={styles.urlCell}>{p.img || "—"}</td>
                                    <td className={styles.actionsCell}>
                                        <button
                                            className={`${styles.smallButton} ${styles.edit}`}
                                            onClick={() => openEditModal(p)}
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className={`${styles.smallButton} ${styles.danger}`}
                                            onClick={() => handleDelete(p._id)}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <button className={styles.backButton} onClick={() => router.back()}>
                ← Regresar al Dashboard
            </button>

            {/*  Modal edición */}
            {isEditOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h3>Editar Propiedad</h3>
                        <form onSubmit={handleEditSubmit} className={styles.form}>
                            <label>
                                Nombre:
                                <input
                                    name="name"
                                    type="text"
                                    value={editForm.name}
                                    onChange={handleEditChange}
                                    required
                                />
                            </label>
                            <label>
                                Valor:
                                <input
                                    name="value"
                                    type="number"
                                    value={editForm.value as number | ""}
                                    onChange={handleEditChange}
                                    required
                                />
                            </label>
                            <label>
                                URL de Imagen:
                                <input
                                    name="img"
                                    type="text"
                                    value={editForm.img}
                                    onChange={handleEditChange}
                                />
                            </label>
                            <div className={styles.modalActions}>
                                <button type="submit" disabled={loading}>
                                    {loading ? "Guardando..." : "Guardar"}
                                </button>
                                <button type="button" onClick={() => setIsEditOpen(false)}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/*  Toast */}
            {toast && (
                <div
                    className={`${styles.toast} ${toast.type === "success"
                        ? styles.toastSuccess
                        : toast.type === "error"
                            ? styles.toastError
                            : styles.toastInfo
                        }`}
                >
                    {toast.text}
                </div>
            )}
        </section>
    );
}
