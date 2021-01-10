import React from 'react'

const Name = ({ name }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{width: '60px'}}>{name.name}</td>
                    <td>{name.amount}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Name