import { BookOpen, Globe, GraduationCap, HandHeart, Palette, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ActivityKey } from '@/lib/content'

export const activityIcons: Record<ActivityKey, LucideIcon> = {
  culture: Palette,
  education: GraduationCap,
  solidarity: HandHeart,
  research: BookOpen,
  sport: Target,
  network: Globe,
}
