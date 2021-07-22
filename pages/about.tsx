import { NextPage } from "next";


const AboutPage: NextPage = () => {
    return (
        <>
            <div className="w-full flex justify-items-center items-center flex-wrap">
                <div className="w-full menuMin:w-2/3">
                    <h1 className="text-6xl pb-2 uppercase font-bold menuMin:text-9xl">
                        About <span className="text-typescript">me</span>.
                    </h1>
                    <p className="text-xl text-whippy menuMin:pr-4">
                        My name is Adri&aacute;n Terrassa, and I&apos;m an apassionate for frontend development. I started to learn since 2015 self-taught, and since then i keep learning and renewing myself. 
                    </p>
                    <br />
                    <p className="text-xl pb-12 text-whippy menuMin:pr-4">
                        Actually I&apos;m an active collaborator to
                        <a href="https://3dsmaps.com" className="pl-2 underline hover:text-typescript">3dsmaps.com</a> and
                        <a href="https://discordsafe.com" className="pl-2 underline hover:text-typescript">Discord Safe Bot</a>.
                    </p>
                    <a
                        className="rounded-sm text-2xl bg-typescript py-3 px-8 mt-6 text-white hover:bg-css"
                        href="https://drive.google.com/file/d/1U2n-8p2gZVH8n3JJQLwMcDKA41XWspOZ/view?usp=sharing">
                        Download CV
                    </a>
                </div>
                <img
                    src="https://lh3.googleusercontent.com/rNN4o6xYJGC3mzCeY1Isyf1qGgHLUv7HGHx8rCF-uQaLfUlo8bTB9X8DbNyBMH7rpVokfKpiVX5x-SAiVVEaY1BNKCPltDNmO7QkU6tAPDoKMe9EdPfVG4RXHrsWBDvVI4LVJ6n9RCfqSd-Xpw58uNDgg6BzjkoGrGbc94QcUZHzDv0pIPn9mwZUyeP--j9Yi11ZZO0Wpgkf1miaDeHeW-gIqLFM6aFoc99dP75m2oH84aODMsMU_00FXJMzcKZM9fvwqXgdrUY3-LM9p3XS3rvd9NvbWtnK5l6_kOZCwfv4IFfgMMDIW1FJSCgBuSiNp-mddOOtOwLig3UTTPWgLfGpTNGZdZIAtIGkDrcFSW6ixnsxxEBiBTB-1e0MnjHRyjEStrxdA-cLP6q1gHvbTuweROkSGnFrYAxCUt1h-em5xiQQHXx47EzkAZ6KPXRN0iHrNTBdpHCiMTkoahY-JRrGK987E3BvYrnOpsR_PNCN3ZtlrSIPkicgDbc22SFM0OzwzhPCyWNrD0Ubr3hB7EsX5XZmLEMKx3G7nZHT0EexPd7BpzhqZi267aU9UM70DFyHMt37RntbtD61CiUuIZmvT4nXTotRMUmWD4AuroEcRMDi8rQZDuIyhilOnCJmNJ-ACtqKLhM2CT9ZBfm5h1I452OjkVWwPQh1UxkHF0i36JAqkjy-qST5vgjKiv6VAU4l1SlV9t08UlUwgZ9BVzY=w758-h943-no?authuser=0"
                    className="w-full pt-12 menuMin:w-1/3 menuMin:pt-0"
                />
            </div>
        </>
    );
};

export default AboutPage;