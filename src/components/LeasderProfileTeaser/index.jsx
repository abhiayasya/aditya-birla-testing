import Image from 'next/image'
import SocialLinks from "../SocialLinks";
import Link from 'next/link';

const LeasderProfileTeaser = ({leader}) => {
    const slug = leader.name.toLowerCase().replaceAll(" ", "-");
    return(
        <div className="rounded-[20px] border overflow-hidden">
            <Link href={`/about-us/leadership-team/${slug}`}>
                <div className="leader-pic">
                    <Image
                        src={leader.profilePic}
                        width={500}
                        height={500}
                        alt={leader.name}
                        />
                </div>
                <div className="p-5">
                    <h6 className="text-xl font-medium mb-2">{leader.name}</h6>
                    <p className="text-sm">{leader.designation}</p>
                    <div>
                        <SocialLinks />
                    </div>
                </div>
            </Link>
        </div>
    )
};

export default LeasderProfileTeaser;