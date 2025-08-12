import Slider from "@/components/landing/Slider";

export default function Home(){
    return(
        <div>
            <div className="text-center">
                <h1 className="text-4xl text-blue-400">
                    Gallery Image
                </h1>
                <p className="text-gray-500">
                    A simple gallery image application
                </p>
            </div>
            <Slider />
        </div>
    )
}