
type CardContainerProps = {
    children: React.ReactNode;
}

export default function CardContainer({ children }: CardContainerProps) {
    return <div className=" w-fit p-4 mt-4 border border-gray-200 rounded-md grid grid-cols-1 gap-y-5 md:grid-cols-3 md:w-full  ">
            {children}
    </div>;
}
