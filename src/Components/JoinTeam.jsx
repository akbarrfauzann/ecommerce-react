export default function JoinTeam() {
  return (
    <div>
      <div className="bg-accent relative" data-aos="fade-down" data-aos-delay="300" data-aos-duration="3000">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="lg:flex items-center justify-center gap-12 py-12">
            <div className="lg:w-1/3 rounded-md relative overflow-hidden">
              <img src="./coach.webp" alt="" className="rounded-md hoverImg" loading="lazy" width={"10  0%"} height={"100%"} />
            </div>
            <div className="lg:w-1/3">
              <h2 className="font-black lg:pt-0 pt-4 text-3xl">JOIN OUR TEAM</h2>
              <p className="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas alias illo quaerat necessitatibus, laboriosam officiis sunt recusandae nihil sed architecto.</p>
              <button className="my-2 px-6 h-12 text-sm border-2 rounded-md bg-accent text-neutral border-neutral hover:bg-neutral hover:text-primary hover:border-neutral transition-bg">SIGN UP</button>
              <div className="flex items-center">
                {[...Array(3)].map((_, index) => (
                  <img key={index} src="./coach.webp" alt="coach" className="w-10 h-10 -mr-4 rounded-full border border-white" loading="lazy" />
                ))}
                <p className="font-serif p-5">Our Coaches</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-8 opacity-10">
          <img src="./ring.png" alt="" className="w-80" />
        </div>
      </div>
    </div>
  );
}
