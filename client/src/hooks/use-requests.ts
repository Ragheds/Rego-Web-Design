import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type RequestInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateRequest() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: RequestInput) => {
      const res = await fetch(api.requests.create.path, {
        method: api.requests.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit request");
      }
      
      return api.requests.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Received!",
        description: "I'll start building your preview and be in touch soon.",
        variant: "default", 
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
