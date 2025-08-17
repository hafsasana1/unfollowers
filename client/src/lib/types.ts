export interface InstagramUser {
  username: string;
  name: string;
  profilePicture: string;
  isVerified?: boolean;
}

export interface FollowerStats {
  totalFollowers: number;
  following: number;
  unfollowers: number;
  mutualFollowers: number;
  newFollowers: number;
  recentUnfollowers: number;
}

export interface AnalysisResults {
  stats: FollowerStats;
  unfollowersList: InstagramUser[];
  mutualFollowersList: InstagramUser[];
  newFollowersList: InstagramUser[];
  analysisDate: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
