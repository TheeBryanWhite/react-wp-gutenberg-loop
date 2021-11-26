import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { GBlocks } from '../components/gblocks'

// An example WordPress page template using my gblocks components
const PageTemplate = ({ blocks }) => {
    return <GBlocks blockData={ blocks } />
}

const Page = ({ data }) => {
    const { wpPage: page } = data
    return (
        <Layout>
            <Helmet title={`${page.title} | Hello World!`} />
            <PageTemplate blocks={page.blocks} />
        </Layout>
    )
}

export default Page

/**
 * This works but there has to be a better way to recursively drill down through
 * the blocks that can potentially contain an infinite loop of container parents
 * (i.e. groups and columns) and child blocks.
*/
export const pageQuery = graphql`
    query PageByID($id: String!) {
        wpPage(id: { eq: $id }) {
            title
            blocks {
                ... on WpCoreHeadingBlock {
                    saveContent
                    attributes {
                        ... on WpCoreHeadingBlockAttributes {
                            className
                            align
                        }
                    }
                    name
                }
                ... on WpCoreParagraphBlock {
                    attributes {
                        ... on WpCoreParagraphBlockAttributes {
                            className
                            align
                        }
                    }
                    saveContent
                    name
                }
                ... on WpAcfInlineSvgBlock {
                    name
                    saveContent
                    attributes {
                        align
                        className
                    }
                }
                ... on WpCoreButtonsBlock {
                    saveContent
                    name
                    attributes {
                        ... on WpCoreButtonsBlockAttributes {
                            align
                            className
                        }
                    }
                }
                ... on WpCoreImageBlock {
                    saveContent
                    name
                    attributes {
                        ... on WpCoreImageBlockAttributes {
                            align
                            className
                        }
                    }
                }
                ... on WpCoreColumnsBlock {
                    ... on WpCoreColumnsBlock {
                        attributes {
                            ... on WpCoreColumnsBlockAttributes {
                                align
                                className
                            }
                        }
                    }
                    name
                    innerBlocks {
                        ... on WpCoreColumnBlock {
                            attributes {
                                ... on WpCoreColumnBlockAttributes {
                                    className
                                }
                            }
                            name
                            innerBlocks {
                                ... on WpCoreHeadingBlock {
                                    name
                                    attributes {
                                        ... on WpCoreHeadingBlockAttributes {
                                            className
                                            align
                                        }
                                    }
                                    saveContent
                                }
                                ... on WpCoreParagraphBlock {
                                    attributes {
                                        ... on WpCoreParagraphBlockAttributes {
                                            className
                                            align
                                        }
                                    }
                                    name
                                    saveContent
                                }
                                ... on WpAcfInlineSvgBlock {
                                    name
                                    attributesJSON
                                }
                                ... on WpCoreButtonsBlock {
                                    attributes {
                                        ... on WpCoreButtonsBlockAttributes {
                                            className
                                            align
                                        }
                                    }
                                    name
                                    saveContent
                                }
                                ... on WpCoreImageBlock {
                                    attributes {
                                        ... on WpCoreImageBlockAttributes {
                                            className
                                            align
                                        }
                                    }
                                    name
                                    saveContent
                                }
                            }
                        }
                    }
                }
                ... on WpCoreGroupBlock {
                    attributes {
                      ... on WpCoreGroupBlockAttributes {
                            align
                            className
                        }
                    }
                    name
                    innerBlocks {
                        ... on WpCoreHeadingBlock {
                            saveContent
                            attributes {
                                ... on WpCoreHeadingBlockAttributes {
                                    className
                                    align
                                }
                            }
                            name
                        }
                        ... on WpCoreParagraphBlock {
                            attributes {
                                ... on WpCoreParagraphBlockAttributes {
                                    className
                                    align
                                }
                            }
                            saveContent
                            name
                        }
                        ... on WpAcfInlineSvgBlock {
                            name
                            attributesJSON
                            attributes {
                                align
                                className
                            }
                        }
                        ... on WpCoreButtonsBlock {
                            saveContent
                            name
                            attributes {
                                ... on WpCoreButtonsBlockAttributes {
                                    align
                                    className
                                }
                            }
                        }
                        ... on WpCoreImageBlock {
                            saveContent
                            name
                            attributes {
                                ... on WpCoreImageBlockAttributes {
                                    align
                                    className
                                }
                            }
                        }
                        ... on WpCoreColumnsBlock {
                            ... on WpCoreColumnsBlock {
                                attributes {
                                    ... on WpCoreColumnsBlockAttributes {
                                        align
                                        className
                                    }
                                }
                            }
                            name
                            innerBlocks {
                                ... on WpCoreColumnBlock {
                                    attributes {
                                        ... on WpCoreColumnBlockAttributes {
                                            className
                                        }
                                    }
                                    name
                                    innerBlocks {
                                        ... on WpCoreHeadingBlock {
                                            name
                                            attributes {
                                                ... on WpCoreHeadingBlockAttributes {
                                                    className
                                                    align
                                                }
                                            }
                                            saveContent
                                        }
                                        ... on WpCoreParagraphBlock {
                                            attributes {
                                                ... on WpCoreParagraphBlockAttributes {
                                                    className
                                                    align
                                                }
                                            }
                                            name
                                            saveContent
                                        }
                                        ... on WpAcfInlineSvgBlock {
                                            name
                                            attributesJSON
                                        }
                                        ... on WpCoreButtonsBlock {
                                            attributes {
                                                ... on WpCoreButtonsBlockAttributes {
                                                    className
                                                    align
                                                }
                                            }
                                            name
                                            saveContent
                                        }
                                        ... on WpCoreImageBlock {
                                            attributes {
                                                ... on WpCoreImageBlockAttributes {
                                                    className
                                                    align
                                                }
                                            }
                                            name
                                            saveContent
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`