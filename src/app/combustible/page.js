"use client";
import { useState } from "react";

const PRECIOS_COMBUSTIBLE = {
  especial: 4.25,
  regular: 4.05,
  diesel: 3.96,
};

export default function CombustiblePage() {
  const [tipo, setTipo] = useState("especial");
  const [galones, setGalones] = useState("");
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");

  const handleCalcular = (e) => {
    e.preventDefault();
    const cant = parseFloat(galones);

    if (isNaN(cant) || cant < 0.05 || cant > 150) {
      setError("La cantidad debe estar entre 0.05 y 150 galones.");
      setTotal(0);
      return;
    }

    setError("");
    const precioUnitario = PRECIOS_COMBUSTIBLE[tipo];
    const resultadoFinal = cant * precioUnitario;
    setTotal(resultadoFinal.toFixed(2));
  };

  const handleChangeGalones = (e) => {
    const val = e.target.value;
    setGalones(val);
    const cant = parseFloat(val);
    if (!isNaN(cant) && cant >= 0.05 && cant <= 150) {
      setError("");
      setTotal((cant * PRECIOS_COMBUSTIBLE[tipo]).toFixed(2));
    } else {
      setTotal(0);
    }
  };

  const handleChangeTipo = (e) => {
    const nuevoTipo = e.target.value;
    setTipo(nuevoTipo);
    const cant = parseFloat(galones);
    if (!isNaN(cant) && cant >= 0.05 && cant <= 150) {
      setTotal((cant * PRECIOS_COMBUSTIBLE[nuevoTipo]).toFixed(2));
    }
  };

  return (
    <main className="container py-5" style={{ maxWidth: 720 }}>
      <h2>Cotizador de Combustible</h2>
      <form onSubmit={handleCalcular} noValidate>
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">Tipo de Combustible</label>
          <select
            className="form-select"
            id="tipo"
            value={tipo}
            onChange={handleChangeTipo}
          >
            <option value="especial">Especial ($4.25 por galón)</option>
            <option value="regular">Regular ($4.05 por galón)</option>
            <option value="diesel">Diésel ($3.96 por galón)</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="galones" className="form-label">Cantidad de Galones (Mín: 0.05 - Máx: 150)</label>
          <input
            type="number"
            className={`form-control ${error ? "is-invalid" : ""}`}
            id="galones"
            min="0.05"
            max="150"
            step="0.05"
            value={galones}
            onChange={handleChangeGalones}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="total" className="form-label">Monto a Pagar ($)</label>
          <input
            type="text"
            className="form-control fw-bold bg-light"
            id="total"
            value={`$${total}`}
            readOnly
          />
        </div>
      </form>
    </main>
  );
}