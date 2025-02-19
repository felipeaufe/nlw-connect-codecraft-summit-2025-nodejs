import { redis } from '../redis/client'

interface AccessInviteLink {
  subscriberId: string
}

export async function accessInviteLink({ subscriberId }: AccessInviteLink) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
