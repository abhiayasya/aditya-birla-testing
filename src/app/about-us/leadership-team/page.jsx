import LeasderProfileTeaser from "@/components/LeasderProfileTeaser";
import {Leaders} from "../../../constants/constant";
import _map from 'lodash/map';

const LeadershipTeam = () => {
    return(
        <div>
            <div className="grid grid-cols-4 gap-4">
                {_map(Leaders, (leader, index) => {
                    return (
                        <LeasderProfileTeaser leader={leader} key={index} />
                    );
                })};
            </div>
        </div>
    )
}

export default LeadershipTeam;