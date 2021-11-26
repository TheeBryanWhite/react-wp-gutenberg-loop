import React from 'react'
import { Looper } from '.'

const GBlocks = (props) => {
    
    const classBuilder = (blockData) => {
        let className = []
        
        if (typeof blockData.name !== 'undefined') {
            const blockName = blockData.name.split('/')
            className.push(blockName[blockName.length - 1])
        }
        
        if (typeof blockData.attributes !== 'undefined' && blockData.attributes.className !== '') {
            className.push(blockData.attributes.className)
        }

        if (typeof blockData.attributes !== 'undefined' && blockData.attributes.align !== '') {
            className.push(blockData.attributes.align)
        }

        return className.join(' ')
    }

    // loop through the block data
    const outputEl = props.blockData.map((block, index) => {
        // does the current index have an array in it?
        if (Object.keys(block).includes('innerBlocks')) {
            // Yes?
            // It's a column block.
            // Set a container div.
            // Go again.
            return <div className={classBuilder(block)} key={index}><Looper blockData={block.innerBlocks} /></div>
        } else {
            // No?
            // Stop. 
            // Check the field type.
            // Output the content.
            if (classBuilder(block).split(' ')[0] === 'inline-svg') {
                const json = JSON.parse(block.attributesJSON)
                return <div className={classBuilder(block)} dangerouslySetInnerHTML={{ __html: json.data.block_inline_svg }} key={index} />
            } else {
                return <div className={classBuilder(block)} dangerouslySetInnerHTML={{ __html: block.saveContent }} key={index} />
            }
        }
    })
    
    return outputEl
}


export default GBlocks