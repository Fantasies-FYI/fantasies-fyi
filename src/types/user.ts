
import { UserProfile as BaseUserProfile } from "@/data/sampleFantasies";

export interface ExtendedUserProfile extends BaseUserProfile {
  partnerGender: "male" | "female";
}
