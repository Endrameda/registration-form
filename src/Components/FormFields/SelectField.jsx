import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import React from "react";

let customStyles = {
    control : (provided, state) => {
        return {
            display : 'flex',
            alignItems : 'center',
            height : '52px',
            border : state.isFocused ? '1px solid #0880AE' : '1px solid #dbe2ea',
            boxShadow : state.isFocused ? '0 4px 8px rgba(44, 39, 56, 0.04), 0 0 0 1px #0880AE' : '0 4px 8px rgba(44, 39, 56, 0.04)',
            borderRadius : '6px',
            padding : '0 15px',
            backgroundColor : ' #ffffff',
            transition : '0.2s',
            width : '100%',
        }
    },
    singleValue : () => {
        return {
            fontSize : '16px',
            color : '#2c2738',
            lineHeight : '21px',
        }
    },
    placeholder : () => ({
        fontSize : '16px',
        lineHeight : '21px',
        color : '#7C9CBF'
    }),
    indicatorSeparator : () => ({ display : 'none' }),
    clearIndicator : () => ({ display : 'none' }),
    option : (provided, state) => {
        return {
            height : '44px',
            padding : '12px 15px 11px',
            fontWeight : 'norm',
            fontSize : '16px',
            lineHeight : '21px',
            color : '#756f86',
            cursor : state.isSelected ? 'normal' : 'pointer',
            pointerEvents : state.isSelected ? 'none' : 'all',
            backgroundColor : state.isSelected ? '#ebf4f8' : '#ffffff'
        }
    },
}

const customIndicator = () => (
    <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z"
            fill="#0880AE"/>
    </svg>

)

export default function CustomSelect ({ formClass, control, options, name, errors, ...rest }) {
    return (
        <label className={ `${ formClass }__row field` }>
            <span className={ `${ formClass }__field-title field__title` }>Язык</span>
            <Controller
                className={ `${ formClass }__field field__select` }
                control={ control }
                isClearable
                name={ name }
                defaultValue={ '' }
                as={ <ReactSelect
                    options={ options }
                    styles={ customStyles }
                    components={ { IndicatorsContainer : customIndicator } }
                    { ...rest }
                /> }
            />
        </label>
    )
}