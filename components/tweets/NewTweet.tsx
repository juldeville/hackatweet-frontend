import Button from "../commons/Button";

export default function NewTweet() {
  const handleTweet = () => {};
  return (
    <div className="flex flex-col gap-10">
      <div className="px-6">
        <div className="text-2xl font-semibold">Home</div>
      </div>
      <div className="flex justify-center ">
        <div className="w-3/4">
          <input
            type="text"
            placeholder="What's Up?"
            className="bg-inherit border-b w-full py-4 focus:outline-none "
          />
        </div>
      </div>
      <div className="flex bg-slate justify-center ">
        <div className="w-3/4 flex justify-end items-center gap-6">
          <div>5/280</div>
          <Button label="Tweet" onClick={handleTweet} type={4} />
        </div>
      </div>
    </div>
  );
}
