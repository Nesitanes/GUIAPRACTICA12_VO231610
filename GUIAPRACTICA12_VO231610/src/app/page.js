"use client";
import { useState } from "react";
import TablaDatos from "@/components/TablaDatos";

// Definición de columnas para la tabla de resultados
const columnas = [
  { campo: "nombre", titulo: "Nombre" },
  { campo: "sueldoBase", titulo: "Sueldo Base" },
  { campo: "isss", titulo: "ISSS" },
  { campo: "afp", titulo: "AFP" },
  { campo: "renta", titulo: "Renta" },
  { campo: "sueldoNeto", titulo: "Sueldo Neto" },
];

export default function CalculoSalarios() {
  const [formData, setFormData] = useState({ nombre: "", sueldoBase: "" });
  const [errores, setErrores] = useState({});
  const [registros, setRegistros] = useState([]);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEnviado(false);
  };

  const calcularDescuentos = (salario) => {
    // 1. Cálculo de ISSS (3% con un tope máximo cotizable de $1,000.00 -> descuento máx $30.00)
    let isss = salario * 0.03;
    if (isss > 30.00) {
      isss = 30.00;
    }

    // 2. Cálculo de AFP (7.25% fijo)
    const afp = salario * 0.725; // Ojo: 7.25% en decimales es 0.0725
    const afpReal = salario * 0.0725;

    // 3. Impuesto sobre la Renta (calculado sobre salario - ISSS - AFP)
    const baseImponible = salario - isss - afpReal;
    let renta = 0;

    if (baseImponible > 550.01 && baseImponible <= 895.24) {
      renta = (baseImponible - 550.00) * 0.10 + 17.67;
    } else if (baseImponible > 895.25 && baseImponible <= 2038.10) {
      renta = (baseImponible - 895.24) * 0.20 + 60.00;
    } else if (baseImponible > 2038.11) {
      renta = (baseImponible - 2038.10) * 0.30 + 288.57;
    }

    const sueldoNeto = salario - isss - afpReal - renta;

    return {
      isss: isss.toFixed(2),
      afp: afpReal.toFixed(2),
      renta: renta.toFixed(2),
      sueldoNeto: sueldoNeto.toFixed(2),
    };
  };

  const validar = () => {
    const temp = {};
    const sueldoNum = parseFloat(formData.sueldoBase);

    if (!formData.nombre.trim()) {
      temp.nombre = "El nombre es obligatorio.";
    }
    if (!formData.sueldoBase || isNaN(sueldoNum) || sueldoNum <= 0) {
      temp.sueldoBase = "Ingrese un sueldo válido mayor que cero.";
    }

    setErrores(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      const salario = parseFloat(formData.sueldoBase);
      const calculos = calcularDescuentos(salario);

      const nuevoRegistro = {
        id: crypto.randomUUID(),
        nombre: formData.nombre,
        sueldoBase: `$${salario.toFixed(2)}`,
        isss: `$${calculos.isss}`,
        afp: `$${calculos.afp}`,
        renta: `$${calculos.renta}`,
        sueldoNeto: `$${calculos.sueldoNeto}`,
      };

      setRegistros([...registros, nuevoRegistro]);
      setFormData({ nombre: "", sueldoBase: "" });
      setEnviado(true);
    }
  };

  return (
    <main className="container py-5" style={{ maxWidth: 850 }}>
      <h2>Calculadora de Sueldo Neto (El Salvador)</h2>
      <form onSubmit={handleSubmit} noValidate className="mb-4">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre del empleado</label>
          <input
            type="text"
            className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="sueldoBase" className="form-label">Sueldo Base ($)</label>
          <input
            type="number"
            step="0.01"
            className={`form-control ${errores.sueldoBase ? "is-invalid" : ""}`}
            id="sueldoBase"
            name="sueldoBase"
            value={formData.sueldoBase}
            onChange={handleChange}
          />
          {errores.sueldoBase && <div className="invalid-feedback">{errores.sueldoBase}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Calcular y Agregar</button>
      </form>

      {enviado && (
        <div className="alert alert-success mt-3">
          Empleado agregado y calculado correctamente.
        </div>
      )}

      <TablaDatos titulo="Historial de Sueldos Calculados" columnas={columnas} filas={registros} />
    </main>
  );
}
