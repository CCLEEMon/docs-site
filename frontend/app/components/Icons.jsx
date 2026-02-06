import { Puzzle, Brain, Rocket, Search, Check, Zap, Shield, Lightbulb, TrendingUp, User, Download, FileText, MessageCircle, Clock } from 'lucide-react'

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

export const ZapIcon = ({ size = 24 }) => <Zap size={size} />

export const ShieldIcon = ({ size = 24 }) => <Shield size={size} />

export const LightbulbIcon = ({ size = 24 }) => <Lightbulb size={size} />

export const TrendIcon = ({ size = 24 }) => <TrendingUp size={size} />

export const UserIcon = ({ size = 24 }) => <User size={size} />

export const DownloadIcon = ({ size = 24 }) => <Download size={size} />

export const FileIcon = ({ size = 24 }) => <FileText size={size} />

export const MessageCircleIcon = ({ size = 24 }) => <MessageCircle size={size} />

export const ClockIcon = ({ size = 24 }) => <Clock size={size} />
