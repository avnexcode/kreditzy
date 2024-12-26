import { DashboardContainer } from '~/components/layouts/DashboardContainer';
import { BadgeList } from '../components/badge/BadgeList';

export const DashboardPage = async () => {
    return (
        <DashboardContainer title="Dashboard" description="">
            <BadgeList />
        </DashboardContainer>
    );
};
