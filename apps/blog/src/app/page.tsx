import Image from "next/image";
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
    <>
    <div className=" flex justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-black to-slate-600 via-slate-600 ">
      <div className=" ">
        
        <Button className="bg-white rounded-md p-[40px] text-3xl text-black font-bold shadow-2xl hover:scale-105">
          <Link href="https://leapbrands.io/blog" target="_blank" > 
            Practice blog
          </Link>
        </Button>

        <div className=" mt-10">
          <Card className="bg-white text-black ring-1 ring-gray-500 shadow-xl">
            <CardHeader>
              <CardTitle>Test</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id aliquid, quia esse recusandae in similique eos eius accusamus, quos veritatis molestias! Architecto facere itaque sapiente debitis dolorum labore natus?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quos non, natus adipisci laboriosam praesentium ipsa eos maxime, repellat illum, numquam corrupti rem commodi! Velit nihil corrupti at atque odit.</p>
            </CardContent>
            <CardFooter>
              <p>today</p>
            </CardFooter>
          </Card>
        </div>

        <div className=" mt-10">
          <Card className="bg-white text-black ring-1 ring-gray-500 shadow-xl">
            <CardHeader>
              <CardTitle>Test</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id aliquid, quia esse recusandae in similique eos eius accusamus, quos veritatis molestias! Architecto facere itaque sapiente debitis dolorum labore natus?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quos non, natus adipisci laboriosam praesentium ipsa eos maxime, repellat illum, numquam corrupti rem commodi! Velit nihil corrupti at atque odit.</p>
            </CardContent>
            <CardFooter>
              <p>today</p>
            </CardFooter>
          </Card>
        </div>

        <div className=" mt-10">
          <Card className="bg-white text-black ring-1 ring-gray-500 shadow-xl">
            <CardHeader>
              <CardTitle>Test</CardTitle>
              <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem id aliquid, quia esse recusandae in similique eos eius accusamus, quos veritatis molestias! Architecto facere itaque sapiente debitis dolorum labore natus?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quos non, natus adipisci laboriosam praesentium ipsa eos maxime, repellat illum, numquam corrupti rem commodi! Velit nihil corrupti at atque odit.</p>
            </CardContent>
            <CardFooter>
              <p>today</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
    </>
    
  );
}
