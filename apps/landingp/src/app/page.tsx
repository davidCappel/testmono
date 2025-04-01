import {Button} from "../../../../packages/ui/src/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../../packages/ui/src/components/ui/card"
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_60px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-white text-black">
      
      <nav className="w-full max-w-6xl flex justify-between items-center">
        <div className="font-bold text-2xl">LEAP</div>
        <div className="hidden sm:flex space-x-6">
          <Link href="#features" className="hover:underline">Features</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#about" className="hover:underline">About</Link>
        </div>
        <Button className="text-white" variant="outline" size="sm">Sign In</Button>
      </nav>

      
      <main className="w-full max-w-6xl">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">Your. Recruiting. SAAS.</h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-8 text-gray-600">
            A easier recruitment process. We help you find the right candidates faster and more efficiently. Our platform is designed to streamline your hiring process, making it easier for you to connect with top talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get Started</Button>
            <Button  className="text-white"variant="outline" size="lg">Learn More</Button>
          </div>
        </div>

        
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Easy Integration</CardTitle>
                <CardDescription>Can be worked into any company</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our software is built to to be flexible and work with your brand, as your brand grows. We designed it to fit your needs and the needs of your corporation, allowing seamless integration into your daily practices</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn more</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Customizable</CardTitle>
                <CardDescription>Make it your own</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Easily customize the look and feel of your application with our cutting edge ui that makes it simple for our product to fit the theme of your company.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn more</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
                <CardDescription>Built for speed and longevity</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Optimized for performance from the ground up. Keep your application running smoothly without sacrificing features or design, and recive the benefits of our consistent updates</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn more</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        
        <div id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Standard</CardTitle>
                <CardDescription>For small projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>✓ 5 projects</li>
                  <li>✓ Basic support</li>
                  <li>✓ Core features</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Standard</Button>
              </CardFooter>
            </Card>
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Premium</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li>✓ Unlimited projects</li>
                  <li>✓ Priority support</li>
                  <li>✓ All features included</li>
                  <li>✓ Advanced analytics</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Choose Premium</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        
        <div className="text-center mb-16">
          <Card className="bg-gray-50">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
              <p className="mb-6 max-w-xl mx-auto">Join thousands of satisfied customers building great products with our design system.</p>
              <Button size="lg">Start Free Trial</Button>
            </CardContent>
          </Card>
        </div>
      </main>

      
      <footer className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="text-gray-500">© 2025 Leap. All rights reserved.</div>
        <div className="flex justify-start sm:justify-end space-x-6 text-gray-500">
          <Link href="https://leapbrands.io/" className="hover:text-black">Terms</Link>
          <Link href="https://leapbrands.io/" className="hover:text-black">Privacy</Link>
          <Link href="https://leapbrands.io/" className="hover:text-black">Contact</Link>
        </div>
      </footer>
    </div>
  );
}