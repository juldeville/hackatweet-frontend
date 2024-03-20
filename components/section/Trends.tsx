type Tag = {
  _id: string;
  name: string;
  tweets: string[];
};

type TrendsProps = {
  trends: Tag[];
};

export default function Trends({ trends }: TrendsProps) {
  console.log("trends are", trends);
  const trendList = trends.map((trend) => {
    return (
      <div className="flex flex-col cursor-pointer">
        <div className="font-bold">{trend.name}</div>
        <div className="text-slate-400">{trend.tweets.length} tweet(s)</div>
      </div>
    );
  });
  return (
    <div className="  flex flex-col justify-between py-10 px-12">
      <div className=" w-full flex flex-col gap-4">
        <div className="text-2xl font-semibold">Trends</div>
        <div className="flex flex-col gap-4 bg-customDark p-4 rounded-md">
          {trendList}
        </div>
      </div>
    </div>
  );
}
