import styled from "styled-components";

function StyledComponent() {
    const Box = styled.div({
        backgroundColor: '#222',
        padding: '20px',
        borderRadius: '8px',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#37474F',
        }
    });
    const PrimaryButton = styled.button`
        background-color: #0070f3;
        color: white;
        font-size: 16px;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 200px;

        &:hover {
            background-color: #0051a2; /* Native CSS nesting and pseudo-classes */
        }
    `;

    const DangerButton = styled(PrimaryButton)`
        background-color: #EF5350;
        &:hover {
            background-color: #D32F2F; /* Native CSS nesting and pseudo-classes */
        }
    `;

    return (
        <Box>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <PrimaryButton>Click Me</PrimaryButton>
                        </td>
                        <td>
                            <DangerButton>Danger Click</DangerButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Box>
    );
}

export default StyledComponent;