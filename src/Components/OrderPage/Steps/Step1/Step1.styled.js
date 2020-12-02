import styled from "styled-components";

export const CityRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;
export const PointRow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 48px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
`;

export const TextContainer = styled.div`
    text-align: end;
    margin: 0 0 16px 0;
`;

export const MapContainer = styled.div`
    width: 100%;
`;

export const customStyles = {
    control: (styles) => (
        {
            ...styles,
            cursor: `pointer`,
            backgroundColor: "white",
            border: `none`,
            borderRadius: 0,
            borderBottom: `1px solid #999999`,
            width: 225,
            fontWeight: 300,
            fontSize: 14,
            boxShadow: `none !important`,
            ':hover': {
                borderColor: `#0EC261`
            },
            ':focus': {
                borderColor: `#0EC261`
            }
        }
    ),
    input: (styles) => (
        {
            ...styles,
            fontWeight: 300,
            fontSize: 14,
            padding: 0,
            margin: 0,
        }
    ),
    dropdownIndicator: (styles) => (
        {
            display: `none`
        }
    ),
    indicatorSeparator: (styles) => (
        {
            display: `none`
        }
    ),
    clearIndicator: (styles) => (
        {
            color: `#EEEEEE`,
            transition: `all 100ms`,
            ':hover': {
                color: `#121212`
            },
        }
    )
}