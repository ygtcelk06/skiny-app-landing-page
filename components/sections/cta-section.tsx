import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="pt-10 md:pt-20 relative bg-gradient-to-br from-[#C838F8]/60 via-[#6B88EB]/30 to-[#1BCEE0]/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Side - Text and Badges */}
          <div className="space-y-6 lg:space-y-8 pb-12 lg:pb-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] leading-tight max-w-xl">
              <span className="inline-block text-left">
              Ne bekliyorsun, cilt bakım rutinini hemen takip etmeye başla!
              </span>
            </h2>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link href="/" className="inline-block w-[180px]">
                <Image
                  src="/images/store-btn.svg"
                  alt="Download on the App Store"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
              <Link href="/" className="inline-block w-[180px]">
                <Image
                  src="/images/google-btn.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={53}
                  className="h-[53px] w-auto hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </div>

          {/* Right Side - Phone Mockups */}
          <div className="relative flex justify-end">
            <div className="relative w-full max-w-[600px]">
              <Image
                src="/images/footer-img.png"
                alt="Skiny App - Track Your Skincare Routine"
                width={600}
                height={500}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
