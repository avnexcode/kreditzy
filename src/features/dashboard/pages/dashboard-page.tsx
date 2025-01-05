import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { BadgeList } from '../components/badges/BadgeList';

export const DashboardPage = () => {
    return (
        <DashboardContainer>
            <BadgeList />
        </DashboardContainer>
    );
};
