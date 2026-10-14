(()=>{"use strict";module.exports = [
"[project]/src/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalculoSalarios
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablaDatos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TablaDatos.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// Definición de columnas para la tabla de resultados
const columnas = [
    {
        campo: "nombre",
        titulo: "Nombre"
    },
    {
        campo: "sueldoBase",
        titulo: "Sueldo Base"
    },
    {
        campo: "isss",
        titulo: "ISSS"
    },
    {
        campo: "afp",
        titulo: "AFP"
    },
    {
        campo: "renta",
        titulo: "Renta"
    },
    {
        campo: "sueldoNeto",
        titulo: "Sueldo Neto"
    }
];
function CalculoSalarios() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        nombre: "",
        sueldoBase: ""
    });
    const [errores, setErrores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [registros, setRegistros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [enviado, setEnviado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setEnviado(false);
    };
    const calcularDescuentos = (salario)=>{
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
            sueldoNeto: sueldoNeto.toFixed(2)
        };
    };
    const validar = ()=>{
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
    const handleSubmit = (e)=>{
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
                sueldoNeto: `$${calculos.sueldoNeto}`
            };
            setRegistros([
                ...registros,
                nuevoRegistro
            ]);
            setFormData({
                nombre: "",
                sueldoBase: ""
            });
            setEnviado(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container py-5",
        style: {
            maxWidth: 850
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Calculadora de Sueldo Neto (El Salvador)"
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                noValidate: true,
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "nombre",
                                className: "form-label",
                                children: "Nombre del empleado"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                className: `form-control ${errores.nombre ? "is-invalid" : ""}`,
                                id: "nombre",
                                name: "nombre",
                                value: formData.nombre,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            errores.nombre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invalid-feedback",
                                children: errores.nombre
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 111,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "sueldoBase",
                                className: "form-label",
                                children: "Sueldo Base ($)"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                step: "0.01",
                                className: `form-control ${errores.sueldoBase ? "is-invalid" : ""}`,
                                id: "sueldoBase",
                                name: "sueldoBase",
                                value: formData.sueldoBase,
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            errores.sueldoBase && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invalid-feedback",
                                children: errores.sueldoBase
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 125,
                                columnNumber: 34
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "btn btn-primary",
                        children: "Calcular y Agregar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            enviado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert alert-success mt-3",
                children: "Empleado agregado y calculado correctamente."
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TablaDatos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                titulo: "Historial de Sueldos Calculados",
                columnas: columnas,
                filas: registros
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/TablaDatos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TablaDatos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TablaDatos({ titulo, columnas, filas }) {
    if (filas.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted mt-4",
            children: "Aún no hay registros."
        }, void 0, false, {
            fileName: "[project]/src/components/TablaDatos.js",
            lineNumber: 3,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-5",
                children: titulo
            }, void 0, false, {
                fileName: "[project]/src/components/TablaDatos.js",
                lineNumber: 8,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "table-responsive",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "table table-striped",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: columnas.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: col.titulo
                                    }, col.campo, false, {
                                        fileName: "[project]/src/components/TablaDatos.js",
                                        lineNumber: 14,
                                        columnNumber: 2
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/TablaDatos.js",
                                lineNumber: 12,
                                columnNumber: 2
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/TablaDatos.js",
                            lineNumber: 11,
                            columnNumber: 2
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: filas.map((fila)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: columnas.map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: fila[col.campo]
                                        }, col.campo, false, {
                                            fileName: "[project]/src/components/TablaDatos.js",
                                            lineNumber: 22,
                                            columnNumber: 2
                                        }, this))
                                }, fila.id, false, {
                                    fileName: "[project]/src/components/TablaDatos.js",
                                    lineNumber: 20,
                                    columnNumber: 2
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/TablaDatos.js",
                            lineNumber: 18,
                            columnNumber: 2
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TablaDatos.js",
                    lineNumber: 10,
                    columnNumber: 2
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/TablaDatos.js",
                lineNumber: 9,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TablaDatos.js",
        lineNumber: 7,
        columnNumber: 2
    }, this);
}
}),
];})()

//# sourceMappingURL=src_1a9b72fk9hvli._.js.map