import { cn } from '../../lib/utils'

const LoadingSpinner = ({ size = 'default', className }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'animate-spin rounded-full border-2 border-gray-300 border-t-purple-600',
          sizeClasses[size]
        )}
      />
    </div>
  )
}

const LoadingSkeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]',
        className
      )}
      {...props}
    />
  )
}

export { LoadingSpinner, LoadingSkeleton }
