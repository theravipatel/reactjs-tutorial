import { useState } from "react";

function DynamicConditionalInlineStyle() {
    const defaultTextColor = "#fff";
    const defaultTableStyle = {
        border: "1px solid #ed3a3a",
        borderCollapse: "collapse",
        backgroundColor: "orange",
        color: defaultTextColor,
    };
    const [theme, setTheme] = useState("orange");
    const [tableStyle, setTableStyle] = useState(defaultTableStyle);

    function updateTheme(bgColor) {
        setTheme(bgColor);
        let newStyle = {
            backgroundColor: bgColor
        }
        newStyle = { 
            ...newStyle,
            ...( bgColor === "blue" ? { textAlign: "right" } : { textAlign: "left" })
        }
        setTableStyle({ ...tableStyle, ...newStyle });
    }

    return (
        <div>
            <table border="1" width="500px" cellPadding="5px" style={tableStyle}>
                <thead>
                    <tr>
                        <td>
                            <button onClick={ () => updateTheme("orange") }>Orange Theme</button>
                        </td>
                        <td>
                            <button onClick={ () => updateTheme("white") }>White Theme</button>
                        </td>
                        <td>
                            <button onClick={ () => updateTheme("blue") }>Blue Theme</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <h4 style={{ color: theme === "white" ? "#555" : defaultTextColor }}>!!!Hello World!!!</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DynamicConditionalInlineStyle;