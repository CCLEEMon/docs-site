import { Puzzle, Brain, Rocket, Search, Check, Zap, Shield, Lightbulb, TrendingUp, User, Download, FileText, MessageCircle, Clock, ArrowRight, MessageSquare, Github, Mail, Image, Video } from 'lucide-react'

export const RocketIcon = ({ size = 24 }) => <Rocket size={size} />

export const PluginIcon = ({ size = 24, color }) => (
  <Puzzle size={size} color={color} strokeWidth={1.5} />
)

export const AIIcon = ({ size = 24, color }) => (
  <Brain size={size} color={color} strokeWidth={1.5} />
)

export const ChartIcon = ({ size = 24 }) => (
  <Search size={size} />
)

export const SearchIcon = ({ size = 24 }) => <Search size={size} />

export const CheckIcon = ({ size = 24 }) => <Check size={size} />

export const ZapIcon = ({ size = 24, className }) => <Zap size={size} className={className} />

export const ShieldIcon = ({ size = 24, className }) => <Shield size={size} className={className} />

export const LightbulbIcon = ({ size = 24, className }) => <Lightbulb size={size} className={className} />

export const TrendIcon = ({ size = 24, className }) => <TrendingUp size={size} className={className} />

export const UserIcon = ({ size = 24 }) => <User size={size} />

export const DownloadIcon = ({ size = 24 }) => <Download size={size} />

export const FileIcon = ({ size = 24 }) => <FileText size={size} />

export const MessageCircleIcon = ({ size = 24, color }) => (
  <MessageCircle size={size} color={color} strokeWidth={2} />
)

export const ClockIcon = ({ size = 24 }) => <Clock size={size} />

export const ArrowRightIcon = ({ size = 24 }) => <ArrowRight size={size} />

export const MessageSquareIcon = ({ size = 24, color }) => (
  <MessageSquare size={size} color={color} strokeWidth={2} />
)

export const GithubIcon = ({ size = 24, color }) => (
  <Github size={size} color={color} />
)

export const MailIcon = ({ size = 24, color }) => (
  <Mail size={size} color={color} strokeWidth={2} />
)

export const ImageIcon = ({ size = 24 }) => <Image size={size} strokeWidth={1.5} />

export const VideoIcon = ({ size = 24 }) => <Video size={size} strokeWidth={1.5} />

