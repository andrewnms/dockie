import { CardStackDemo } from "./use-cardstack";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40 border-t">
      <div className="">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="relative group items-center py-16 lg:py-6 justify-center w-full h-full flex-1">
            {/* Dimming overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-300 pointer-events-none z-10" />
            <div className="relative z-20">
              <CardStackDemo/>
            </div>
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div className="flex gap-2 mx-8 flex-col">
              <h2 className="text-7xl tracking-tighter lg:max-w-xl font-regular text-left">
                Apply fast, Get Hired faster.
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Instantly apply to jobs with a single click—no forms, no hassle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
