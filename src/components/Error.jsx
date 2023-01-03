import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 700;
    padding: 15px;
    text-align: center;
    text-transform: uppercase;
`;

const Error = ({ children }) => {
    return (
        <Texto>
            { children }
        </Texto>
    )
}

export default Error