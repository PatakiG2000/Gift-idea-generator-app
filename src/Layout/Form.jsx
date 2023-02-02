import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="block p-6 rounded-lg shadow-lg max-w-md ">
      <h1 className="mb-5 font-extrabold tracking-tight ">
        Tell us more about the receiver
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 p-2">
        <label
          class="form-check-label inline-block text-gray-800 mb-2"
          htmlFor="receiver"
        >
          Who is the receiver?
        </label>
        <select
          {...register("for_who", { required: true })}
          id="receiver"
          className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option value="Friend">Friend</option>
          <option value="Colleague">Colleague</option>
          <option value="Boyfriend">Boyfriend</option>
          <option value="Girlfriend">Girlfriend</option>
          <option value="Husband">Husband</option>
          <option value="Daughter">Daughter</option>
          <option value="Son">Son</option>
          <option value="Grandparent">Grandparent</option>
          <option value="Dad">Dad</option>
          <option value=" Mom"> Mom</option>
          <option value="Brother">Brother</option>
          <option value=" Sister"> Sister</option>
          <option value=" Classmate"> Classmate</option>
          <option value=" Teacher"> Teacher</option>
          <option value=" Boss"> Boss</option>
        </select>
        <label
          class="form-check-label inline-block text-gray-800 mb-2"
          htmlFor="occasion"
        >
          What is the occasion?
        </label>
        <select
          {...register("occasion", { required: true })}
          id="occasion"
          className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option value="Birthday">Birthday</option>
          <option value=" Wedding"> Wedding</option>
          <option value=" Anniversary"> Anniversary</option>
          <option value=" Christmas"> Christmas</option>
          <option value=" Graduation"> Graduation</option>
        </select>
        <label
          class="form-check-label inline-block text-gray-800 mb-2"
          htmlFor="age"
        >
          How old is the receiver?
        </label>
        <input
          type="number"
          placeholder="age"
          {...register("age", { required: true, max: 120, min: 0 })}
          id="age"
          className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <label
          class="form-check-label inline-block text-gray-800 mb-2"
          htmlFor="occasion"
        >
          Tell us more about the receiver! Like hobbies, if he/she got an animal
          -anything really
        </label>
        <textarea
          {...register("other", { required: true })}
          id="moreinfo"
          className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />

        <button
          type="submit"
          className="  w-full
      px-6
      py-2.5
      bg-red-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-700 hover:shadow-lg
      focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Generate
        </button>
      </form>
    </div>
  );
}
