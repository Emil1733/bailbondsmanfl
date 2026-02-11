import Link from 'next/link';

const ContentContainer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`max-w-6xl mx-auto px-6 ${className}`}>
        {children}
    </div>
);

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 bg-slate-950 text-slate-400 text-sm border-t border-white/5 font-sans">
            <ContentContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-white">Statewide Bail Bonds</h3>
                        <p className="leading-relaxed">
                            Professional, licensed bail bond agents serving all 67 counties in Florida. We specialize in fast release from county detention centers.
                        </p>
                        <p className="text-xs text-slate-600">
                            Lic# P123456 • 24/7 Availability
                        </p>
                    </div>


                    {/* Specialized Services */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Specialized Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="/services/dui-bail-bonds" className="hover:text-yellow-500 transition-colors">DUI Bail Bonds</Link></li>
                            <li><Link href="/services/domestic-violence-bail" className="hover:text-yellow-500 transition-colors">Domestic Violence</Link></li>
                            <li><Link href="/services/immigration-bail-bonds" className="hover:text-yellow-500 transition-colors">Immigration Bonds</Link></li>
                            <li><Link href="/services/nebbia-hold-bail" className="hover:text-yellow-500 transition-colors">Nebbia Hold / Bail Source</Link></li>
                            <li><Link href="/services/traffic-warrant-bail" className="hover:text-yellow-500 transition-colors">Traffic Warrants</Link></li>
                        </ul>
                    </div>

                    {/* South Florida Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">South Florida</h4>
                        <ul className="space-y-2">
                            <li><Link href="/county/miami-dade/miami" className="hover:text-yellow-500 transition-colors">Miami Bail Bonds</Link></li>
                            <li><Link href="/county/miami-dade/hialeah" className="hover:text-yellow-500 transition-colors">Hialeah Bail Bonds</Link></li>
                            <li><Link href="/county/miami-dade/miami-beach" className="hover:text-yellow-500 transition-colors">Miami Beach Bail Bonds</Link></li>
                            <li><Link href="/county/broward/fort-lauderdale" className="hover:text-yellow-500 transition-colors">Ft. Lauderdale Bail Bonds</Link></li>
                            <li><Link href="/county/broward/hollywood" className="hover:text-yellow-500 transition-colors">Hollywood Bail Bonds</Link></li>
                            <li><Link href="/county/palm-beach/west-palm-beach" className="hover:text-yellow-500 transition-colors">West Palm Beach Bail Bonds</Link></li>
                        </ul>
                    </div>

                    {/* Central Florida Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">Central Florida</h4>
                        <ul className="space-y-2">
                            <li><Link href="/county/orange/orlando" className="hover:text-yellow-500 transition-colors">Orlando Bail Bonds</Link></li>
                            <li><Link href="/county/orange/winter-park" className="hover:text-yellow-500 transition-colors">Winter Park Bail Bonds</Link></li>
                            <li><Link href="/county/hillsborough/tampa" className="hover:text-yellow-500 transition-colors">Tampa Bail Bonds</Link></li>
                            <li><Link href="/county/hillsborough/brandon" className="hover:text-yellow-500 transition-colors">Brandon Bail Bonds</Link></li>
                            <li><Link href="/county/pinellas/st-petersburg" className="hover:text-yellow-500 transition-colors">St. Petersburg Bail Bonds</Link></li>
                            <li><Link href="/county/polk/lakeland" className="hover:text-yellow-500 transition-colors">Lakeland Bail Bonds</Link></li>
                        </ul>
                    </div>

                    {/* West & North Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-xs">West & North FL</h4>
                        <ul className="space-y-2">
                            <li><Link href="/county/lee/fort-myers" className="hover:text-yellow-500 transition-colors">Fort Myers Bail Bonds</Link></li>
                            <li><Link href="/county/lee/cape-coral" className="hover:text-yellow-500 transition-colors">Cape Coral Bail Bonds</Link></li>
                            <li><Link href="/county/pasco/new-port-richey" className="hover:text-yellow-500 transition-colors">New Port Richey Bail Bonds</Link></li>
                            <li><Link href="/county/duval/jacksonville-beach" className="hover:text-yellow-500 transition-colors">Jacksonville Beach Bail Bonds</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p>&copy; {currentYear} Statewide Bail Bonds Florida. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-white transition-colors font-bold">Contact Us</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
}
