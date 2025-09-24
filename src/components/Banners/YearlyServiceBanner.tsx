import Banner from "../Banner";

const YearlyServiceBanner: React.FC = () => {
    const message: string = `Ask us about scheduling your yearly inspections today!`;

    return <Banner bannerMessage={message} />
}

export default YearlyServiceBanner;