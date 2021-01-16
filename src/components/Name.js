import React from 'react'

const Name = ({ name }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td className='name'>{name.name}</td>
                    <td>{name.amount}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Name