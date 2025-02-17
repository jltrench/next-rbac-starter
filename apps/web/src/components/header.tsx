import { Slash } from 'lucide-react'
import Image from 'next/image'

import vercelIcon from '@/assets/vercel-icon.svg'
import { ability } from '@/auth/auth'
import { OrganizationSwitcher } from '@/components/organization-switcher'
import { PendingInvites } from '@/components/pending-invites'
import { ProfileButton } from '@/components/profile-button'
import { ProjectSwitcher } from '@/components/project-switcher'
import { ThemeSwitcher } from '@/components/theme/theme-switcher'
import { Separator } from '@/components/ui/separator'

export async function Header() {
  const permissions = await ability()

  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={vercelIcon} className="size-6 dark:invert" alt="vercel" />

        <Slash className="size-3 -rotate-[24deg] text-border" />

        <OrganizationSwitcher />

        {permissions?.can('get', 'Project') && (
          <>
            <Slash className="size-3 -rotate-[24deg] text-border" />
            <ProjectSwitcher />
          </>
        )}
      </div>

      <div className="flex items-center gap-4">
        <PendingInvites />
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-5" />
        <ProfileButton />
      </div>
    </div>
  )
}
