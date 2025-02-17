import { XOctagon } from 'lucide-react'

import { revokeInviteAction } from '@/app/(app)/org/[slug]/members/actions'
import { Button } from '@/components/ui/button'

interface RevokeInviteButtonProps {
  inviteId: string
}

export function RevokeInviteButton({ inviteId }: RevokeInviteButtonProps) {
  return (
    <form action={revokeInviteAction.bind(null, inviteId)}>
      <Button type="submit" size="sm" variant="destructive">
        <XOctagon className="mr-2 size-4" />
        Revoke invite
      </Button>
    </form>
  )
}
