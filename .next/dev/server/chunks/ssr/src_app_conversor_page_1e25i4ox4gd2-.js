module.exports = [
"[project]/src/app/conversor/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Conversor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// Tipos de cambio ficticios para el ejemplo (unidades por 1 USD).
// No reflejan el mercado actual.
const TASAS_POR_USD = {
    USD: 1,
    EUR: 0.86,
    JPY: 147.5,
    GBP: 0.75
};
const MONEDAS = [
    {
        codigo: "USD",
        nombre: "Dólar estadounidense"
    },
    {
        codigo: "EUR",
        nombre: "Euro"
    },
    {
        codigo: "JPY",
        nombre: "Yen japonés"
    },
    {
        codigo: "GBP",
        nombre: "Libra esterlina"
    }
];
function formatear(valor, moneda) {
    return new Intl.NumberFormat("es-SV", {
        style: "currency",
        currency: moneda
    }).format(valor);
}
function Conversor() {
    const [monto, setMonto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [origen, setOrigen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("USD");
    const [destino, setDestino] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EUR");
    const [resultado, setResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleConvert = (e)=>{
        e.preventDefault();
        const cantidad = parseFloat(monto);
        if (isNaN(cantidad) || cantidad <= 0) {
            setError("Ingrese un monto mayor que cero.");
            setResultado(null);
            return;
        }
        setError("");
        const tasa = TASAS_POR_USD[destino] / TASAS_POR_USD[origen];
        setResultado({
            cantidad,
            origen,
            destino,
            convertido: cantidad * tasa
        });
    };
    const intercambiar = ()=>{
        setOrigen(destino);
        setDestino(origen);
        setResultado(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container py-5",
        style: {
            maxWidth: 720
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Conversor de monedas"
            }, void 0, false, {
                fileName: "[project]/src/app/conversor/page.js",
                lineNumber: 51,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleConvert,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "monto",
                                className: "form-label",
                                children: "Monto"
                            }, void 0, false, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 54,
                                columnNumber: 2
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                className: `form-control ${error ? "is-invalid" : ""}`,
                                id: "monto",
                                min: "0",
                                step: "0.01",
                                value: monto,
                                onChange: (e)=>setMonto(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 55,
                                columnNumber: 2
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "invalid-feedback",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 64,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/conversor/page.js",
                        lineNumber: 53,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "origen",
                                        className: "form-label",
                                        children: "De"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/conversor/page.js",
                                        lineNumber: 68,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        id: "origen",
                                        value: origen,
                                        onChange: (e)=>setOrigen(e.target.value),
                                        children: MONEDAS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.codigo,
                                                children: [
                                                    m.codigo,
                                                    " - ",
                                                    m.nombre
                                                ]
                                            }, m.codigo, true, {
                                                fileName: "[project]/src/app/conversor/page.js",
                                                lineNumber: 76,
                                                columnNumber: 2
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/conversor/page.js",
                                        lineNumber: 69,
                                        columnNumber: 2
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 67,
                                columnNumber: 2
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "destino",
                                        className: "form-label",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/conversor/page.js",
                                        lineNumber: 83,
                                        columnNumber: 2
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "form-select",
                                        id: "destino",
                                        value: destino,
                                        onChange: (e)=>setDestino(e.target.value),
                                        children: MONEDAS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: m.codigo,
                                                children: [
                                                    m.codigo,
                                                    " - ",
                                                    m.nombre
                                                ]
                                            }, m.codigo, true, {
                                                fileName: "[project]/src/app/conversor/page.js",
                                                lineNumber: 91,
                                                columnNumber: 2
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/conversor/page.js",
                                        lineNumber: 84,
                                        columnNumber: 2
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 82,
                                columnNumber: 2
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/conversor/page.js",
                        lineNumber: 66,
                        columnNumber: 2
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "btn btn-primary",
                                children: "Convertir"
                            }, void 0, false, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 99,
                                columnNumber: 2
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "btn btn-outline-dark",
                                onClick: intercambiar,
                                children: "Intercambiar monedas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/conversor/page.js",
                                lineNumber: 100,
                                columnNumber: 2
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/conversor/page.js",
                        lineNumber: 98,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/conversor/page.js",
                lineNumber: 52,
                columnNumber: 2
            }, this),
            resultado && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "alert alert-success mt-3",
                children: [
                    formatear(resultado.cantidad, resultado.origen),
                    " equivale a",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: formatear(resultado.convertido, resultado.destino)
                    }, void 0, false, {
                        fileName: "[project]/src/app/conversor/page.js",
                        lineNumber: 112,
                        columnNumber: 2
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/conversor/page.js",
                lineNumber: 110,
                columnNumber: 2
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/conversor/page.js",
        lineNumber: 50,
        columnNumber: 2
    }, this);
}
}),
];

//# sourceMappingURL=src_app_conversor_page_1e25i4ox4gd2-.js.map