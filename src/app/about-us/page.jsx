import Breadcrumb from '@/components/Breadcrumb'
const About = () => {
    return(
        <div>
            <Breadcrumb
                homeElement={'Home'}
                activeClasses='active'
                containerClasses='flex flex-wrap' 
                listClasses='hover:underline mx-2'
                />
            About</div>
    )
}

export default About;