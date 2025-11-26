import { motion } from "framer-motion";
import { Shield, Zap, Target, Users } from "lucide-react";


const IAMBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      metric: "10X",
      title: "Enhanced Security Infrastructure",
      description: "ThirdVizion implements zero-trust architecture and multi-factor authentication, reducing security breaches by 80%.",
      gradient: "from-yellow-500 to-amber-400",
    },
    {
      icon: Zap,
      metric: "5X",
      title: "Rapid IAM Deployment",
      description: "Our expert team deploys complete IAM solutions in weeks, not months, with automated provisioning and seamless integration.",
      gradient: "from-orange-500 to-yellow-400",
    },
    {
      icon: Target,
      metric: "3X",
      title: "Compliance Acceleration",
      description: "ThirdVizion ensures GDPR, HIPAA, and SOX compliance with built-in audit trails, access reviews, and automated reporting.",
      gradient: "from-amber-500 to-yellow-300",
    },
    {
      icon: Users,
      metric: "70%",
      title: "IT Operations Efficiency",
      description: "Our managed IAM services reduce password reset tickets and manual tasks, freeing your IT team for strategic work.",
      gradient: "from-lime-500 to-yellow-300",
    },
  ];


  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 py-20 font-inter-tight relative overflow-hidden">
      {/* Background elements */}
     
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-font-semibold tracking-tight text-yellow-500 mb-6 leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
            How ThirdVizion Helps
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "work-sans, sans-serif" }}>
            We deliver comprehensive IAM solutions that strengthen security, streamline operations, and ensure compliance for your business.
          </p>
        </motion.div>


        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative p-8 rounded-2xl border border-yellow-500/20 bg-black/40 backdrop-blur-2xl min-h-[320px] flex flex-col transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] group"
              style={{
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Glass morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>


                {/* Metric */}
                <div className="text-2xl md:text-3xl lg:text-4xl font-inter-tight font-black text-yellow-500 mb-4 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-all duration-500">
                  {benefit.metric}
                </div>


                {/* Title */}
                <h3 className="text-2xl font-inter-tight font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                  {benefit.title}
                </h3>


                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed flex-1" style={{ fontFamily: "work-sans, sans-serif" }}>
                  {benefit.description}
                </p>


                {/* Progress bar */}
                <div className="mt-6 w-full h-1 bg-yellow-500/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full`}
                  />
                </div>
              </div>


              {/* Decorative corners */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-yellow-500/40 group-hover:border-yellow-500 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-yellow-500/40 group-hover:border-yellow-500 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>


        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
         
        </motion.div>
      </div>
    </section>
  );
};


export default IAMBenefits;
