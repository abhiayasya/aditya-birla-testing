'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Fragment } from 'react'

const Breadcrumb = ({homeElement, containerClasses, listClasses, activeClasses}) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    return (
        <div className='breadcrumb'>
            <ul className={containerClasses}>
                <li className={listClasses}><Link href={'/'}>{homeElement}</Link></li>
            {
                pathNames.map( (link, index) => {
                    link = link.replaceAll("-", " ");
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = link;
                    return (
                        <Fragment key={index}>
                            <li className={itemClasses} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                        </Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default Breadcrumb;