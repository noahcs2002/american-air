import Banner from "../Banner";

const FallServiceBanner: React.FC = () => {
    const message: string = `Call or email to schedule your Fall ${new Date().getFullYear()} inspections today!`;

    return <Banner bannerMessage={message} />
}

export default FallServiceBanner;