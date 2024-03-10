import LandingPage from "@/components/LandingPage";




export default function PagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <LandingPage />
            {children}
        </div>
    );
}
