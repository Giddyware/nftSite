import clsx from "clsx";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, className, ...rest }) => {
  //   const {
  //     register,
  //     formState: { errors },
  //   } = useFormContext();
  return (
    <input
      //   {...register(`${name}`)}
      className={clsx(
        'body-100 peer w-full rounded-lg border border-brand-100 bg-neutral-100 px-8 py-6 font-bold text-brand-900 caret-brand-500 outline-none autofill:bg-neutral-100 focus:border-brand-500 aria-[invalid="true"]:!border-accent-200 aria-[invalid="true"]:!text-accent-200 focus:aria-[invalid="true"]:!border-accent-200 focus:aria-[invalid="true"]:!ring-accent-200 hover:border-brand-500 dark:border-brand-600 dark:bg-brand-700 dark:text-neutral-100 dark:autofill:bg-brand-700 dark:focus:border-brand-500 dark:hover:border-brand-500',
        className
      )}
      //   aria-invalid={errors?.[name] ? "true" : "false"}
      //   aria-errormessage={`errors-${name}`}
      {...rest}
    />
  );
};

const FormErrorText = ({ id = "", message, className, children, ...rest }) => {
  //   const {
  //     formState: { errors },
  //   } = useFormContext();

  return (
    <span
      role="alert"
      id={`errors-${id}`}
      aria-live="assertive"
      className={clsx(
        "text-200 font-semibold leading-200 tracking-[-0.21px]",
        className
      )}
      {...rest}
    >
      {/* {children || message || `${errors?.[id]?.message || ""}`} */}
    </span>
  );
};

const FormLabel = ({ className, children, ...rest }) => {
  return (
    <label className={clsx("body-100", className)} {...rest}>
      {children}
    </label>
  );
};

const FormControl = ({ as, className, children, ...rest }) => {
  return (
    <div className={clsx("flex flex-col-reverse gap-4", className)} {...rest}>
      {children}
    </div>
  );
};

const FormField = ({
  name,
  type,
  placeholder,
  label,
  defaultValue,
  autoComplete,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
}) => {
  return (
    <FormControl as="div" className={className}>
      <FormInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputClassName}
        autoComplete={autoComplete}
        defaultValue={defaultValue}
      />

      <div className='flex items-center justify-between text-brand-400 peer-aria-[invalid="true"]:!text-accent-200 dark:text-brand-300'>
        <FormLabel htmlFor={name} className={labelClassName} children={label} />
        <FormErrorText id={name} className={errorClassName} />
      </div>
    </FormControl>
  );
};
export default FormField;
