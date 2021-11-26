import React from 'react'

const GBlocks = (props) => {
    const output = Object.keys(props.blockData).map((val, index) => {
        switch (val) {
            case 'attributesJSON':
                const json = JSON.parse(props.blockData.attributesJSON)
                return <div key={index} dangerouslySetInnerHTML={{ __html: json.data.block_inline_svg }} />
            default:
                return <div className={`${props.containerClass}`} dangerouslySetInnerHTML={{ __html: props.blockData }} key={index} />
        }
    })
    
    return output
}

export default GBlocks