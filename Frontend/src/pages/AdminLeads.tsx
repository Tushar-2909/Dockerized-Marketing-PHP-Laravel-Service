import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/layout/Layout";
import { fetchLeads } from "@/services/leads";

const AdminLeads = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });

  return (
    <Layout>
      <section className="py-32 min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-3xl font-light mb-8">📋 Leads Dashboard</h1>

          {isLoading && <p>Loading leads...</p>}
          {isError && <p className="text-red-500">Failed to load leads</p>}

          {data && (
            <div className="overflow-x-auto">
              <table className="w-full border border-border/50">
                <thead>
                  <tr className="border-b border-border/50 text-left">
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Message</th>
                    <th className="p-4">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((lead: any) => (
                    <tr
                      key={lead.id}
                      className="border-b border-border/30 hover:bg-muted/20"
                    >
                      <td className="p-4">{lead.name}</td>
                      <td className="p-4">{lead.email}</td>
                      <td className="p-4 max-w-md truncate">
                        {lead.message}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(lead.created_at).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminLeads;
