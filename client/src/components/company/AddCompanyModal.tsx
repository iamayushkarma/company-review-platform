import { useForm } from "react-hook-form";
import { X } from "lucide-react";

import { createCompany } from "../../api/company.api";

interface AddCompanyModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface CompanyFormData {
  name: string;
  location: string;
  city: string;
  foundedOn: string;
  description: string;
  logo: string;
}

const AddCompanyModal = ({
  open,
  onClose,
  onSuccess,
}: AddCompanyModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CompanyFormData>();

  if (!open) return null;

  const onSubmit = async (data: CompanyFormData) => {
    try {
      await createCompany(data);

      reset();

      onClose();

      onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">
      <div className="w-full max-w-xl rounded-xl bg-white shadow-xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold">Add Company</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Form */}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Company Name
            </label>

            <input
              {...register("name", {
                required: "Company name is required",
              })}
              className="w-full rounded-lg border px-4 py-3"
            />

            <p className="mt-1 text-sm text-red-500">{errors.name?.message}</p>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Location</label>

            <input
              {...register("location", {
                required: "Location is required",
              })}
              className="w-full rounded-lg border px-4 py-3"
            />

            <p className="mt-1 text-sm text-red-500">
              {errors.location?.message}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-sm font-medium">City</label>

              <input
                {...register("city", {
                  required: "City is required",
                })}
                className="w-full rounded-lg border px-4 py-3"
              />

              <p className="mt-1 text-sm text-red-500">
                {errors.city?.message}
              </p>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Founded On
              </label>

              <input
                type="date"
                {...register("foundedOn", {
                  required: "Founded date is required",
                })}
                className="w-full rounded-lg border px-4 py-3"
              />

              <p className="mt-1 text-sm text-red-500">
                {errors.foundedOn?.message}
              </p>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Logo URL</label>

            <input
              {...register("logo")}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="https://..."
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={4}
              {...register("description")}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border px-5 py-2.5"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-white hover:bg-violet-700"
            >
              {isSubmitting ? "Adding..." : "Add Company"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyModal;
