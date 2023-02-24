import React from "react"
import {InputStyled, LabelStyled} from './FormStyled'

const Filter = ({ value, onChange }) => (

                <LabelStyled>
          Find contacts by name
    <InputStyled
            type='text'
            value={value}
            onChange = {onChange}
          />
        </LabelStyled>    
)

export default Filter;