import { api } from '@/http/api-client'

interface UpdateOrganizationRequest {
  org: string
  name: string
  domain: string | null
  shouldAttachUsersByDomain: boolean
}

type UpdateOrganizationResponse = never

export async function updateOrganization({
  org,
  name,
  domain,
  shouldAttachUsersByDomain,
}: UpdateOrganizationRequest): Promise<UpdateOrganizationResponse> {
  const result = await api
    .put(`organizations/${org}`, {
      json: {
        name,
        domain,
        shouldAttachUsersByDomain,
      },
    })
    .json<UpdateOrganizationResponse>()

  return result
}
